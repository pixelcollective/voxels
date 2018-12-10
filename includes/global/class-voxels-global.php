<?php

namespace TPC\Voxels;

/**
 * The global functionality of the plugin.
 *
 * Defines the plugin name, version, and hooks to set post templates
 *
 * @package    voxels
 * @subpackage voxels/global
 * @author     Tiny Pixel Collective, Kelly Mears <developers@tinypixel.io>
 */
class voxels_Global
{

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
	public function __construct( $voxels, $version )
	{

		$this->voxels = $voxels;
		$this->version = $version;

	}

	/**
	 * Register block editor templates for core and custom posttypes.
	 *
	 * @since    0.0.1
	 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-templates/
	 */
	public function add_template_to_posts()
	{

		/**
		 * set core post template
		 *
		 * @since 0.0.1
		 */
		$post_type_object = get_post_type_object( 'post' );

		$post_type_object->template = array(
			array( 'voxels/header',
				array(
					'align' => 'full'
				)
			),
			array( 'voxels/two-column-layout', ),
			array( 'voxels/header',
				array(
					'align' => 'full'
				)
			),
		);

		/**
		 * 🔒 core post template lock 🔒
		 *
		 * @since 0.0.1
		 */
		$post_type_object->template_lock = 'all';

	}
}
