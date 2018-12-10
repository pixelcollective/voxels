<?php
/**
 * Webpack styles and scripts hot loader
 *
 * A class definition that includes functions which provide
 * compiled ES6/SASS in production and BrowserSync in development.
 *
 * @link       https://tinypixel.io
 * @since      0.0.1
 *
 * @package    voxels
 */

namespace TPC\Voxels;
use Wpackio\Enqueue;

/**
 * The Webpack class
 *
 * Implemented with wpack.io tooling.
 *
 * @link       https://wpack.o
 * @since      0.0.1
 *
 * @package    voxels
 * @subpackage voxels/wpackio
 * @author     Tiny Pixel Collective, Kelly Mears <developers@tinypixel.io>
 */

class Webpack {
  /**
	 * Webpack.io Instance
	 *
	 * @link https://wpack.io
	 */
    public $webpack;

  /**
	 * Webpackio needs to do its work
   * in the plugin's initial construct()
	 *
	 * @link https://wpack.io
	 */
    public function __construct() {

      $this->webpack = new \WPackio\Enqueue(
        'voxels',
        'assets',
        '0.0.1',
        'plugin',
        __FILE__
      );

      /**
       * Call member functions to enqueue webpack
       * generated assets
       *
       * @link https://wpack.io
       */
      add_action( 'admin_enqueue_scripts', [ $this, 'webpack_assets_editor' ] );
      add_action( 'wp_enqueue_scripts', [ $this, 'webpack_assets_public' ] );

    }

    /**
     *  Enqueue administrative scripts and styles
     */
    public function webpack_assets_editor() {

      $this->webpack->enqueue( 'blocks', 'editor', [
          'js' => true,
          'css' => true,
          'js_dep' => [
            'wp-blocks',
            'wp-element',
            'wp-components',
            'wp-editor',
            'lodash',
            'wp-i18n',
            'wp-hooks',
            'wp-data'],
          'css_dep' => [],
          'in_footer' => true,
          'media' => 'all',
      ]);

    }

    /**
     * Enqueue public facing scripts and styles
     */
    public function webpack_assets_public() {

      $this->webpack->enqueue( 'blocks', 'public', [] );

    }
}

new webpack();
