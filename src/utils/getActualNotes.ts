export const getActualNotes = (notes, sortMode, searchValue) => {
    return notes
        .filter(note => {
            if (sortMode === 'fav' && note.isFavorite) return note
            if (sortMode === 'all') return note
        })
        .filter(note => {
            if (Boolean(searchValue) && note.title.toLowerCase().startsWith(searchValue.toLowerCase())) return note
            if (!Boolean(searchValue)) return note
        })
}