/**
 * colorExists checks whether urlColor exists in the colors array maintained
 *  by useState. When the color is found, an object with {success: true, colorRGB:xxx} 
 *  is returned. xxx is the colorRGB value found for urlColor in colors. {success: false}
 *  is returned when urlColor was not found in colors.
 * @param {*} colors the color array maintained by useState 
 * @param {*} urlColor the color value from the url. 
 * @returns {*} results
 */
function colorExists(colors, urlColor) {
    // function checks whether the urlColor exists in colors.
    // Returns true and the colorRGB from colors.
    // Only the first occurrence of the color is used because no
    //  checks exist to ensure the color names are unique.

    const foundColors = colors.filter(color => (color.colorName === urlColor));
    const results = { success: false };

    if (foundColors.length > 0) {
        results.success = true;
        results.colorRGB = foundColors[0].colorRGB;
    }

    return results

}

export { colorExists };