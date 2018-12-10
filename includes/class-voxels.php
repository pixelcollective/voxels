<?php

namespace TPC\Voxels;

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://tinypixel.io
 * @since      0.0.1
 *
 * @package    voxels
 * @subpackage voxels/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      0.0.1
 * @package    voxels
 * @subpackage voxels/includes
 * @author     Tiny Pixel Collective, Kelly Mears <developers@tinypixel.io>
 */
class voxels {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    0.0.1
	 * @access   protected
	 * @var      voxels_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    0.0.1
	 * @access   protected
	 * @var      string    $voxels    The string used to uniquely identify this plugin.
	 */
	protected $voxels;

	/**
	 * The current version of the plugin.
	 *
	 * @since    0.0.1
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;


	/**
	 * Webpack asset manager.
	 * @link https://wpack.io
	 *
	 * @since    0.0.1
	 * @access   public
	 * @var      obj    $wpack    Handles enqueuing of ES6 and SASS.
	 */
	public $webpack;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    0.0.1
	 */
	public function __construct() {

	/**
	 * Name and semver
	 */
		if ( defined( 'VOXELS_VERSION' ) )
			$this->version = VOXELS_VERSION;
		else
			$this->version = '0.0.1';
		$this->voxels = 'voxels';

	/**
	 * Actions, Filters, i18n definitions
	 */
		$this->load_dependencies();
		$this->set_locale();

	/**
	 * Actions, Filters, i18n
	 */
		$this->define_admin_hooks();
		$this->define_public_hooks();
		$this->define_global_hooks();
	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - voxels_Loader. Orchestrates the hooks of the plugin.
	 * - voxels_i18n. Defines internationalization functionality.
	 * - voxels_Admin. Defines all hooks for the admin area.
	 * - voxels_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    0.0.1
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once voxels_PATH . 'includes/class-voxels-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once voxels_PATH . 'includes/class-voxels-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once voxels_PATH . 'includes/admin/class-voxels-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once voxels_PATH . 'includes/public/class-voxels-public.php';

		/**
		 * The class responsible for defining all actions that occur on both admin and public-facing
		 * sides of the site.
		 */
		require_once voxels_PATH . 'includes/global/class-voxels-global.php';

		$this->loader = new voxels_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the voxels_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    0.0.1
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new voxels_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    0.0.1
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new voxels_Admin( $this->get_voxels(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    0.0.1
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new voxels_Public( $this->get_voxels(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );
	}

	/**
	 * Register all of the hooks related to both the admin and public-facing
	 * sides of the site.
	 *
	 * @since    0.0.1
	 * @access   private
	 */
	private function define_global_hooks() {

		$plugin_global = new voxels_Global( $this->get_voxels(), $this->get_version() );

		$this->loader->add_action( 'init', $plugin_global, 'add_template_to_posts' );
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    0.0.1
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     0.0.1
	 * @return    string    The name of the plugin.
	 */
	public function get_voxels() {
		return $this->voxels;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     0.0.1
	 * @return    voxels_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     0.0.1
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}
}
