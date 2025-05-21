const Palette = ({ palette }) => {

    const paletteJSX = palette.map((color, i) => {
        return (
            <div key={i} className="color" style={{backgroundColor: `#${color}`}}></div>
        )
    });

    return (
        <div className="palette">{paletteJSX}</div>
    )
}

export default Palette;