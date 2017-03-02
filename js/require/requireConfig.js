requirejs.config({
    baseUrl: 'js',
    paths: {
        three: 'THREE/build/three.min',
        three_Stats: 'THREE/libs/stats.min',
        three_CanvasRenderer: 'THREE/renderers/CanvasRenderer',
        three_Projector: 'THREE/renderers/Projector',
    },
    shim: {
    }
});