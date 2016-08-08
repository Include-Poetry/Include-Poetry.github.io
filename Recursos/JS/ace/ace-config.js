var editor, salida;
var fuenteSize = '12';
if ($(window).width() < 600) {
	fuenteSize = '10';
}
$('.editor').each(function( index ) {
	editor = ace.edit(this);
	ace.require('ace/ext/settings_menu').init(editor);
	editor.setTheme("ace/theme/monokai");
	editor.session.setMode("ace/mode/c_cpp");
	editor.setShowPrintMargin(false);
	editor.setOptions({
	    maxLines: 20,
	    fontSize: fuenteSize + 'pt'
	});
	editor.commands.addCommands([{
		name: "showSettingsMenu",
		bindKey: {win: "Ctrl-q", mac: "Command-q"},
		exec: function(editor) {
			editor.showSettingsMenu();
		},
		readOnly: true
	}]);
});
$('.output').each(function(index) {
	salida = ace.edit(this);
	ace.require('ace/ext/settings_menu').init(salida);
	salida.setTheme("ace/theme/monokai");
	salida.session.setMode("ace/mode/plain_text");
	salida.setShowPrintMargin(false);
	salida.setOptions({
	    maxLines: 10,
	    fontSize: fuenteSize + 'pt'
	});
	salida.commands.addCommands([{
		name: "showSettingsMenu",
		bindKey: {win: "Ctrl-q", mac: "Command-q"},
		exec: function(salida) {
			salida.showSettingsMenu();
		},
		readOnly: true
	}]);
});