export const formateDate = (date, config) => {

    const defaultOptions = {day: 'numeric',month:'short' , year:'numeric'}

    //The options variable is set to either the config parameter if it's provided or the defaultOptions if config is not provided. This allows you to customize the formatting options when calling the function, but it falls back to the default options if none are specified.
    const options = config ? config : defaultOptions

    return new Date(date).toLocaleDateString('en-UN' , options)
}