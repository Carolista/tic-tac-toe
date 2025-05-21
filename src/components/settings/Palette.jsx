const Palette = ({ id, palette, setPalette }) => {

    const handleChangePalette = () => {
        setPalette(palette);
    }

    const paletteJSX = palette.map((color, i) => {
        return (
            <div key={i} className="color" style={{backgroundColor: `#${color}`}}></div>
        )
    });

    return (
        <div id={`palette-${id}`} className="palette" onClick={handleChangePalette}>{paletteJSX}</div>
    )
}

export default Palette;