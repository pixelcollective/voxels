<?php

namespace TPC\Voxels;

use PostTypes\PostType;
use PostTypes\Taxonomy;

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://tinypixel.io
 * @since      0.0.1
 *
 * @package    voxels
 * @subpackage voxels/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    voxels
 * @subpackage voxels/admin
 * @author     Tiny Pixel Collective, Kelly Mears <developers@tinypixel.io>
 */
class voxels_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    0.0.1
	 * @access   private
	 * @var      string    $voxels    The ID of this plugin.
	 */
	private $voxels;

	/**
	 * The version of this plugin.
	 *
	 * @since    0.0.1
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    0.0.1
	 * @param      string    $voxels       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $voxels, $version ) {

		$this->voxels = $voxels;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    0.0.1
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in voxels_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The voxels_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->voxels, voxels_PATH . 'admin/css/voxels-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    0.0.1
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in voxels_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The voxels_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->voxels, voxels_PATH . 'admin/js/voxels-admin.js', array( 'jquery' ), $this->version, false );

	}
}
