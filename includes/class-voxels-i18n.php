<?php

namespace TPC\Voxels;

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://tinypixel.io
 * @since      0.0.1
 *
 * @package    voxels
 * @subpackage voxels/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      0.0.1
 * @package    voxels
 * @subpackage voxels/includes
 * @author     Tiny Pixel Collective, Kelly Mears <developers@tinypixel.io>
 */
class voxels_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    0.0.1
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'voxels',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
