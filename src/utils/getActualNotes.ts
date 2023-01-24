export const getActualNotes = (notes, sortMode, searchValue) => {
    return notes
        // eslint-disable-next-line array-callback-return
        .filter(note => {
            if (sortMode === 'fav' && note.isFavorite) return note
            if (sortMode === 'all') return note
        })
        // eslint-disable-next-line array-callback-return
        .filter(note => {
            if (Boolean(searchValue) && note.title.toLowerCase().startsWith(searchValue.toLowerCase())) return note
            if (!Boolean(searchValue)) return note
        })
}