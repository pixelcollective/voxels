<?php

namespace TPC\Voxels;

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://tinypixel.io
 * @since      0.0.1
 *
 * @package    voxels
 * @subpackage voxels/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    voxels
 * @subpackage voxels/public
 * @author     Tiny Pixel Collective, Kelly Mears <developers@tinypixel.io>
 */
class voxels_Public {

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
	 * @param      string    $voxels       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $voxels, $version ) {

		$this->voxels = $voxels;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    0.0.1
	 */
	public function enqueue_styles() {

		wp_enqueue_style( $this->voxels, plugin_dir_url( __FILE__ ) . 'css/voxels-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    0.0.1
	 */
	public function enqueue_scripts() {

		wp_enqueue_script( $this->voxels, plugin_dir_url( __FILE__ ) . 'js/voxels-public.js', array( 'jquery' ), $this->version, false );

	}
}
