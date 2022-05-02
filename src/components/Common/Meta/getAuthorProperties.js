import _ from 'lodash'
import PropTypes from 'prop-types'

export const getAuthorProperties = (primaryAuthor, fetchAuthorData) => {
    let authorProfiles = []

    if (fetchAuthorData) {
        authorProfiles.push(
            primaryAuthor.website ? primaryAuthor.website : null,
            primaryAuthor.twitter ? `https://twitter.com/${_.trimStart(primaryAuthor.twitter, `@`)}/` : null,
            primaryAuthor.facebook ? `https://www.facebook.com/${primaryAuthor.facebook}/` : null
        )
    } else {
        authorProfiles.push(
            `https://paalamugan.com/`,
            `https://twitter.com/paalamugan/`,
            `https://www.facebook.com/paalamugan/`
        )
    }

    authorProfiles = _.compact(authorProfiles)

    return {
        name: fetchAuthorData ? primaryAuthor.name : `Paalamugan`,
        sameAsArray: authorProfiles.length ? `["${_.join(authorProfiles, `", "`)}"]` : null,
        image: fetchAuthorData ? primaryAuthor.profile_image : null,
    }
}

getAuthorProperties.defaultProps = {
    fetchAuthorData: false,
}

getAuthorProperties.PropTypes = {
    primaryAuthor: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profile_image: PropTypes.string,
        website: PropTypes.string,
        twitter: PropTypes.string,
        facebook: PropTypes.string,
    }).isRequired,
    fetchAuthorData: PropTypes.bool.isRequired,
}

export default getAuthorProperties
