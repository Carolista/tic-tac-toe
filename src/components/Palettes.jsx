import { palettes } from "../shared/colors";
import Palette from "./Palette";

const Palettes = () => {
    const palettesJSX = palettes.map(palette => {
        return (
            <Palette palette={palette} />
        )
    });

    return (
        <div id="palettes">{palettesJSX}</div>
    )
}

export default Palettes;