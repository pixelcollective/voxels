<?php
/**
 * Tiny Pixel Collective supported WordPress 5 Blocks
 *
 * @link              https://tinypixel.io
 * @since             0.0.1
 * @package           voxels
 *
 * @wordpress-plugin
 * Plugin Name:       voxels
 * Plugin URI:        https://tinypixel.io/voxels
 * Description:       Tiny Pixel Collective supported WordPress 5 Blocks
 * Version:           0.0.1
 * Author:            Tiny Pixel Collective, Kelly Mears <developers@tinypixel.io>
 * Author URI:        https://tinypixel.io
 * License:           MIT
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       voxels
 * Domain Path:       /languages
 */

namespace TPC\Voxels;

require __DIR__ . '/vendor/autoload.php';

/**
 * Have to load and execute wpackio more-or-less
 * immediately in order to properly hot load.
 * @link https://wpack.io
 */
require __DIR__ . '/wpackio.php';

/**
 * Current plugin version.
 * https://semver.org
 */
define( 'voxels_VERSION', '0.0.1' );
define( 'voxels_PATH', plugin_dir_path( __FILE__ ));

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-voxels-activator.php
 */
function activate_voxels() {
	require_once voxels_PATH . 'includes/class-voxels-activator.php';
	voxels_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-voxels-deactivator.php
 */
function deactivate_voxels() {
	require_once voxels_PATH . 'includes/class-voxels-deactivator.php';
	voxels_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_voxels' );
register_deactivation_hook( __FILE__, 'deactivate_voxels' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require voxels_PATH . 'includes/class-voxels.php';

/**
 * Begins execution of the plugin.
 *
 * @since    0.0.1
 */
function run_voxels() {

	$plugin = new voxels();
	$plugin->run();

}

run_voxels();
