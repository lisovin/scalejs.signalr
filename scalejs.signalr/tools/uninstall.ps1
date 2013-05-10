param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.signalr, jquery.signalr, signalr.hubs' |
	Remove-Shims 'jquery.signalr, signalr.hubs' | 
	Remove-ScalejsExtension 'scalejs.signalr' |
	Out-Null
