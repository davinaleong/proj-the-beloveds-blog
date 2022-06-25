import React from 'react'

// helpers
import ArchiveListUrlHelper from "../helpers/archive-list-url.helper"

function FolderListComponent(props: any) {
    const { folders } = props

    let folderLists = null
    if (folders.length > 0) {
        folderLists = (folders.map((folder: Object, index: Number) => <a key={ 'f' + index } href={ ArchiveListUrlHelper(folder.year) } className="folder-item">{ folder.year }</a>))
      }

    return (
        <section className="content-section bg-primary-light">
            <div className="container">
                <div className="folder-list">
                    { folderLists }
                </div>
            </div>
        </section>
    )
}

export default FolderListComponent
