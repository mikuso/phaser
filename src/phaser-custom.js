/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

// require('./polyfills/requestVideoFrame');

var CONST = require('./const');
var Extend = require('./utils/object/Extend');

CONST.VERSION += '-custom-' + CUSTOM_BUILD_ID;

/**
 * @namespace Phaser
 */

var Phaser = {

    Actions: require('./actions'),
    Animations: require('./animations'),
    BlendModes: require('./renderer/BlendModes'),
    Cache: require('./cache'),
    Cameras: require('./cameras'),
    Core: require('./core'),
    Class: require('./utils/Class'),
    Curves: require('./curves'),
    Data: require('./data'),
    // Display: require('./display'),
    // DOM: require('./dom'),
    Events: require('./events'),
    Filters: {
        Controller: require('./filters/Controller'),

        // Barrel: require('./filters/Barrel'),
        // Blend: require('./filters/Blend'),
        // Blur: require('./filters/Blur'),
        // Bokeh: require('./filters/Bokeh'),
        ColorMatrix: require('./filters/ColorMatrix'),
        // Displacement: require('./filters/Displacement'),
        // Glow: require('./filters/Glow'),
        Mask: require('./filters/Mask'),
        // ParallelFilters: require('./filters/ParallelFilters'),
        // Pixelate: require('./filters/Pixelate'),
        // Sampler: require('./filters/Sampler'),
        // Shadow: require('./filters/Shadow'),
        // Threshold: require('./filters/Threshold')
    },
    Game: require('./core/Game'),
    GameObjects: {
        Events: require('./gameobjects/events'),
    
        DisplayList: require('./gameobjects/DisplayList'),
        GameObjectCreator: require('./gameobjects/GameObjectCreator'),
        GameObjectFactory: require('./gameobjects/GameObjectFactory'),
        UpdateList: require('./gameobjects/UpdateList'),
    
        Components: require('./gameobjects/components'),
        GetCalcMatrix: require('./gameobjects/GetCalcMatrix'),
    
        BuildGameObject: require('./gameobjects/BuildGameObject'),
        BuildGameObjectAnimation: require('./gameobjects/BuildGameObjectAnimation'),
        GameObject: require('./gameobjects/GameObject'),
        // BitmapText: require('./gameobjects/bitmaptext/static/BitmapText'),
        // Blitter: require('./gameobjects/blitter/Blitter'),
        // Bob: require('./gameobjects/blitter/Bob'),
        Container: require('./gameobjects/container/Container'),
        // DOMElement: require('./gameobjects/domelement/DOMElement'),
        // DynamicBitmapText: require('./gameobjects/bitmaptext/dynamic/DynamicBitmapText'),
        // Extern: require('./gameobjects/extern/Extern.js'),
        Graphics: require('./gameobjects/graphics/Graphics.js'),
        // Group: require('./gameobjects/group/Group'),
        Image: require('./gameobjects/image/Image'),
        Layer: require('./gameobjects/layer/Layer'),
        Particles: require('./gameobjects/particles'),
        // PathFollower: require('./gameobjects/pathfollower/PathFollower'),
        // RenderTexture: require('./gameobjects/rendertexture/RenderTexture'),
        // RetroFont: require('./gameobjects/bitmaptext/RetroFont'),
        // Rope: require('./gameobjects/rope/Rope'),
        Sprite: require('./gameobjects/sprite/Sprite'),
        // Stamp: require('./gameobjects/stamp/Stamp'),
    
        Text: require('./gameobjects/text/Text'),
        GetTextSize: require('./gameobjects/text/GetTextSize'),
        MeasureText: require('./gameobjects/text/MeasureText'),
        TextStyle: require('./gameobjects/text/TextStyle'),
    
        TileSprite: require('./gameobjects/tilesprite/TileSprite'),
        // Zone: require('./gameobjects/zone/Zone'),
        // Video: require('./gameobjects/video/Video'),
    
        //  Shapes
    
        // Shape: require('./gameobjects/shape/Shape'),
        // Arc: require('./gameobjects/shape/arc/Arc'),
        // Curve: require('./gameobjects/shape/curve/Curve'),
        Ellipse: require('./gameobjects/shape/ellipse/Ellipse'),
        // Grid: require('./gameobjects/shape/grid/Grid'),
        // IsoBox: require('./gameobjects/shape/isobox/IsoBox'),
        // IsoTriangle: require('./gameobjects/shape/isotriangle/IsoTriangle'),
        // Line: require('./gameobjects/shape/line/Line'),
        // Polygon: require('./gameobjects/shape/polygon/Polygon'),
        Rectangle: require('./gameobjects/shape/rectangle/Rectangle'),
        // Star: require('./gameobjects/shape/star/Star'),
        // Triangle: require('./gameobjects/shape/triangle/Triangle'),
    
        // WebGL only

        Shader: require('./gameobjects/shader/Shader'),
        // NineSlice: require('./gameobjects/nineslice/NineSlice'),
        // PointLight: require('./gameobjects/pointlight/PointLight'),
        // SpriteGPULayer: require('./gameobjects/spritegpulayer/SpriteGPULayer'),
    
        Light: require('./gameobjects/lights/Light'),
        LightsManager: require('./gameobjects/lights/LightsManager'),
        LightsPlugin: require('./gameobjects/lights/LightsPlugin'),
        CaptureFrame: require('./gameobjects/captureframe/CaptureFrame'),
    
        //  Game Object Factories
    
        Factories: {
            // Blitter: require('./gameobjects/blitter/BlitterFactory'),
            Container: require('./gameobjects/container/ContainerFactory'),
            // DOMElement: require('./gameobjects/domelement/DOMElementFactory'),
            // DynamicBitmapText: require('./gameobjects/bitmaptext/dynamic/DynamicBitmapTextFactory'),
            // Extern: require('./gameobjects/extern/ExternFactory'),
            Graphics: require('./gameobjects/graphics/GraphicsFactory'),
            // Group: require('./gameobjects/group/GroupFactory'),
            Image: require('./gameobjects/image/ImageFactory'),
            Layer: require('./gameobjects/layer/LayerFactory'),
            Particles: require('./gameobjects/particles/ParticleEmitterFactory'),
            // PathFollower: require('./gameobjects/pathfollower/PathFollowerFactory'),
            // RenderTexture: require('./gameobjects/rendertexture/RenderTextureFactory'),
            // Rope: require('./gameobjects/rope/RopeFactory'),
            Sprite: require('./gameobjects/sprite/SpriteFactory'),
            // Stamp: require('./gameobjects/stamp/StampFactory'),
            // StaticBitmapText: require('./gameobjects/bitmaptext/static/BitmapTextFactory'),
            Text: require('./gameobjects/text/TextFactory'),
            TileSprite: require('./gameobjects/tilesprite/TileSpriteFactory'),
            // Zone: require('./gameobjects/zone/ZoneFactory'),
            // Video: require('./gameobjects/video/VideoFactory'),
    
            //  Shapes
            // Arc: require('./gameobjects/shape/arc/ArcFactory'),
            // Curve: require('./gameobjects/shape/curve/CurveFactory'),
            Ellipse: require('./gameobjects/shape/ellipse/EllipseFactory'),
            // Grid: require('./gameobjects/shape/grid/GridFactory'),
            // IsoBox: require('./gameobjects/shape/isobox/IsoBoxFactory'),
            // IsoTriangle: require('./gameobjects/shape/isotriangle/IsoTriangleFactory'),
            // Line: require('./gameobjects/shape/line/LineFactory'),
            // Polygon: require('./gameobjects/shape/polygon/PolygonFactory'),
            Rectangle: require('./gameobjects/shape/rectangle/RectangleFactory'),
            // Star: require('./gameobjects/shape/star/StarFactory'),
            // Triangle: require('./gameobjects/shape/triangle/TriangleFactory'),

            // WebGL only
            Shader: require('./gameobjects/shader/ShaderFactory'),
            // NineSlice: require('./gameobjects/nineslice/NineSliceFactory'),
            PointLight: require('./gameobjects/pointlight/PointLightFactory'),
            // SpriteGPULayer: require('./gameobjects/spritegpulayer/SpriteGPULayerFactory'),
            CaptureFrame: require('./gameobjects/captureframe/CaptureFrameFactory'),
        },
    
        Creators: {
            // Blitter: require('./gameobjects/blitter/BlitterCreator'),
            Container: require('./gameobjects/container/ContainerCreator'),
            // DynamicBitmapText: require('./gameobjects/bitmaptext/dynamic/DynamicBitmapTextCreator'),
            Graphics: require('./gameobjects/graphics/GraphicsCreator'),
            // Group: require('./gameobjects/group/GroupCreator'),
            Image: require('./gameobjects/image/ImageCreator'),
            Layer: require('./gameobjects/layer/LayerCreator'),
            Particles: require('./gameobjects/particles/ParticleEmitterCreator'),
            // RenderTexture: require('./gameobjects/rendertexture/RenderTextureCreator'),
            // Rope: require('./gameobjects/rope/RopeCreator'),
            Sprite: require('./gameobjects/sprite/SpriteCreator'),
            // Stamp: require('./gameobjects/stamp/StampCreator'),
            // StaticBitmapText: require('./gameobjects/bitmaptext/static/BitmapTextCreator'),
            Text: require('./gameobjects/text/TextCreator'),
            TileSprite: require('./gameobjects/tilesprite/TileSpriteCreator'),
            // Zone: require('./gameobjects/zone/ZoneCreator'),
            // Video: require('./gameobjects/video/VideoCreator'),

            // WebGL only
            Shader: require('./gameobjects/shader/ShaderCreator'),
            // NineSlice: require('./gameobjects/nineslice/NineSliceCreator'),
            PointLight: require('./gameobjects/pointlight/PointLightCreator'),
            // SpriteGPULayer: require('./gameobjects/spritegpulayer/SpriteGPULayerCreator'),
            CaptureFrame: require('./gameobjects/captureframe/CaptureFrameCreator'),
        }
    },
    Geom: require('./geom'),
    Input: require('./input'),
    Loader: {
        FileTypes: {
            // AnimationJSONFile: require('./loader/filetypes/AnimationJSONFile'),
            // AsepriteFile: require('./loader/filetypes/AsepriteFile'),
            AtlasJSONFile: require('./loader/filetypes/AtlasJSONFile'),
            // AtlasXMLFile: require('./loader/filetypes/AtlasXMLFile'),
            AudioFile: require('./loader/filetypes/AudioFile'),
            AudioSpriteFile: require('./loader/filetypes/AudioSpriteFile'),
            // BinaryFile: require('./loader/filetypes/BinaryFile'),
            BitmapFontFile: require('./loader/filetypes/BitmapFontFile'),
            // CompressedTextureFile: require('./loader/filetypes/CompressedTextureFile'),
            // CSSFile: require('./loader/filetypes/CSSFile'),
            // FontFile: require('./loader/filetypes/FontFile'),
            // GLSLFile: require('./loader/filetypes/GLSLFile'),
            HTML5AudioFile: require('./loader/filetypes/HTML5AudioFile'),
            // HTMLFile: require('./loader/filetypes/HTMLFile'),
            // HTMLTextureFile: require('./loader/filetypes/HTMLTextureFile'),
            ImageFile: require('./loader/filetypes/ImageFile'),
            JSONFile: require('./loader/filetypes/JSONFile'),
            // MultiAtlasFile: require('./loader/filetypes/MultiAtlasFile'),
            // MultiScriptFile: require('./loader/filetypes/MultiScriptFile'),
            // PackFile: require('./loader/filetypes/PackFile'),
            PluginFile: require('./loader/filetypes/PluginFile'),
            // SceneFile: require('./loader/filetypes/SceneFile'),
            ScenePluginFile: require('./loader/filetypes/ScenePluginFile'),
            // ScriptFile: require('./loader/filetypes/ScriptFile'),
            SpriteSheetFile: require('./loader/filetypes/SpriteSheetFile'),
            // SVGFile: require('./loader/filetypes/SVGFile'),
            // TextFile: require('./loader/filetypes/TextFile'),
            // TilemapCSVFile: require('./loader/filetypes/TilemapCSVFile'),
            // TilemapImpactFile: require('./loader/filetypes/TilemapImpactFile'),
            TilemapJSONFile: require('./loader/filetypes/TilemapJSONFile'),
            // UnityAtlasFile: require('./loader/filetypes/UnityAtlasFile'),
            // VideoFile: require('./loader/filetypes/VideoFile'),
            // XMLFile: require('./loader/filetypes/XMLFile')
        },
        Events: require('./loader/events'),
        File: require('./loader/File'),
        FileTypesManager: require('./loader/FileTypesManager'),
        GetURL: require('./loader/GetURL'),
        LoaderPlugin: require('./loader/LoaderPlugin'),
        MergeXHRSettings: require('./loader/MergeXHRSettings'),
        MultiFile: require('./loader/MultiFile'),
        XHRLoader: require('./loader/XHRLoader'),
        XHRSettings: require('./loader/XHRSettings')
    },
    Math: require('./math'),
    // Physics: require('./physics'),
    Plugins: require('./plugins'),
    Renderer: require('./renderer'),
    Scale: require('./scale'),
    ScaleModes: require('./renderer/ScaleModes'),
    Scene: require('./scene/Scene'),
    Scenes: require('./scene'),
    Structs: {
        // Events: require('./structs/events'),
        // List: require('./structs/List'),
        // Map: require('./structs/Map'),
        // ProcessQueue: require('./structs/ProcessQueue'),
        // RTree: require('./structs/RTree'),
        // Size: require('./structs/Size')
    },
    Textures: {
        // CanvasTexture: require('./textures/CanvasTexture'),
        DynamicTexture: require('./textures/DynamicTexture'),
        Events: require('./textures/events'),
        FilterMode: require('./textures/const'),
        Frame: require('./textures/Frame'),
        Parsers: {
            // AtlasXML: require('./textures/parsers/AtlasXML'),
            // Canvas: require('./textures/parsers/Canvas'),
            Image: require('./textures/parsers/Image'),
            JSONArray: require('./textures/parsers/JSONArray'),
            // JSONHash: require('./textures/parsers/JSONHash'),
            // KTXParser: require('./textures/parsers/KTXParser'),
            // PVRParser: require('./textures/parsers/PVRParser'),
            SpriteSheet: require('./textures/parsers/SpriteSheet'),
            SpriteSheetFromAtlas: require('./textures/parsers/SpriteSheetFromAtlas'),
            // UnityYAML: require('./textures/parsers/UnityYAML')
        },
        Texture: require('./textures/Texture'),
        TextureManager: require('./textures/TextureManager'),
        TextureSource: require('./textures/TextureSource')
    },
    Tilemaps: require('./tilemaps'),
    Time: require('./time'),
    Tweens: require('./tweens'),
    Utils: require('./utils')

};

//  Merge in the optional plugins and WebGL only features

if (typeof FEATURE_SOUND)
{
    Phaser.Sound = require('./sound');
}

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

/**
 * The root types namespace.
 *
 * @namespace Phaser.Types
 * @since 3.17.0
 */

//  Export it

module.exports = Phaser;

// global.Phaser = Phaser;

// export { Phaser };

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
