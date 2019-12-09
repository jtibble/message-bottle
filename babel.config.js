// babel.config.js
module.exports = {
	"presets": [
		"@babel/typescript", [
			"@babel/preset-env",
			{
				"targets": {
					"node": "current"
				}
			}
		]
	],
	"plugins": [
		"@babel/proposal-class-properties",
		"@babel/proposal-object-rest-spread"
	]
};