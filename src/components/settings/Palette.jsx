const Palette = ({ palette }) => {

    const paletteJSX = palette.map(color => {
        return (
            <div className="color" style={{backgroundColor: `#${color}`}}></div>
        )
    });

    return (
        <div className="palette">{paletteJSX}</div>
    )
}

export default Palette;