<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dailytopic' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'IJ,;ULhylPj%esTl-XoeJy3:}r*)n?x<MBCvbFSTwl]*zmv=26F5Oq2-yd:b2JD(' );
define( 'SECURE_AUTH_KEY',  '~]Fo[>6d/$x~$==jLuWrdoe_EOYW/jE:BKd*lxFy/G)LXbeii;K/gU8sp?WvZcaO' );
define( 'LOGGED_IN_KEY',    'pL2:3O:+zd#+=u;4by|w:7^kC~8(NreSTbABIsMp}83$r-DwntQd8iOw6mLi9orB' );
define( 'NONCE_KEY',        'iYu94.e96*ul;}&[r1<^|YJU_ETl4 &,gr;Uyk?zp14oV-?g_!RQoI)J49b[2Xe:' );
define( 'AUTH_SALT',        '9Zpkhr^sPb~,ejp53&ytide7Y>r()I3E2/MNH;sB%SKUU%t{6k6PWExR}L_r+k3}' );
define( 'SECURE_AUTH_SALT', 'Giio*mF@M)$?$6e%V{Dn1=4hm/FTS@o=a0Z#Lt6Asj>g)[O`lIdSu?PfU=,B;@of' );
define( 'LOGGED_IN_SALT',   '%K=9*}?f7upC/Ud?BhE4FagO_}4/0T3VKw|Cqev08z3DL>#BNs+Q#u&e]G]kK.-w' );
define( 'NONCE_SALT',       'hu{J:6q[UlX|g~m)4R0[^3*cvRDqHdR&H}D?6G(h?!g!^Z0RbU,tUQ_63+OWz|2!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
