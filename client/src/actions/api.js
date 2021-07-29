/**
 * handle fetch api requests to the server
 */

/**
 * @desc gets all divsion names of specified unit
 * @param {string} endpoint 'unit-name'
 */
exports.getList = (endpoint) => {
    fetch('/' + endpoint)
    .then(res => res.text())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
}