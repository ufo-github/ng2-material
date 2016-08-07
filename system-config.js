/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core', '@angular/common', '@angular/forms', '@angular/compiler', '@angular/http', '@angular/router',
    '@angular/platform-browser', '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs', 'ng2-material',
    // App specific barrels.
    'app', 'app/shared', 'app/+index', 'app/+components', 'app/footer', 'app/shared/footer',
    'app/shared/example', 'app/shared/highlight',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) { cliSystemConfigPackages[barrelName] = { main: 'index' }; });
// Material2 specific barrels.
['core', 'checkbox', 'progress-circle', 'progress-bar', 'radio', 'toolbar', 'sidenav', 'icon',
    'input', 'tabs'
].forEach(function (pkgName) {
    cliSystemConfigPackages['@angular2-material/' + pkgName] = {
        main: pkgName + '.js',
        defaultExtension: 'js',
        format: 'cjs'
    };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        '@angular2-material': 'vendor/@angular2-material',
        'ng2-material': 'vendor/ng2-material',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map