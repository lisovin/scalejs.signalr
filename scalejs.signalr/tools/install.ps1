param($installPath, $toolsPath, $package, $project)

$project |
	Add-Paths "{
		'scalejs.signalr' : 'Scripts/scalejs.signalr-$($package.Version)',
		'jquery.signalr' : 'Scripts/jquery.signalR-1.0.1',
		'signalr.hubs':  '/signalr/hubs?'
	}" |
	Add-ScalejsExtension 'scalejs.signalr' |
	Add-Shims "{ 
		'jquery.signalr'			: { 
			deps : ['jQuery']
		},
		'signalr.hubs'				: {
			deps : ['jquery.signalr']
		}
	}" | 
	Out-Null