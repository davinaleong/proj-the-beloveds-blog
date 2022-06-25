const ArchiveListUrlHelper = (folder: Number, page: Number = 1) => {
    if (folder) {
        return `archiveList?folder=${folder}`
    }
    
    if (folder && page) {
        return `archiveList?folder=${folder}&page=${page}`
    }
}

export default ArchiveListUrlHelper