/**
 * Takes in a date and returns a string of the date in the format "Monday, January 1, 2020"
 * @param {Date} date - the date to format
 * @returns {string} - the formatted date
 */
export function dateFormat(date) {
    return new Date(date).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    })
}

/**
 * Calculates the reading time of a given text.       
 * @param {string} text - the text to calculate the reading time of.       
 * @returns {number} the number of minutes it will take to read the text.       
 */
export function readingTime(text) {
    const wordsPerMinute = 200
    const numberOfWords = text.split(/\s/g).length
    return Math.ceil(numberOfWords / wordsPerMinute)
}
