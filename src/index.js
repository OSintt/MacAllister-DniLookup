import app from './app';
require('./db');

async function main() {
	await app.listen(app.get('port'), app.get('host'));
	console.log(app.get('port'));	
}
main();