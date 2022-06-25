const ArchiveListUrlHelper = (folder: Number, page: Number = 1) => {
    if (folder && page) {
        return `archiveList?folder=${folder}&page=${page}`
    }

    if (folder) {
        return `archiveList?folder=${folder}`
    }
}

export default ArchiveListUrlHelper