// MovieList 실습
type MovieType = {
  id: number,
  title: string,
  director: string,
  year: string,
  active: boolean
}

type MoviesProps = {
  movies: MovieType[],
  onRemove: (id: number) => void,
  onToggle: (id: number) => void
}

function MovieList({ movies, onRemove, onToggle }: MoviesProps) {
  return (
    <>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </>
  )
}

type MovieProps2 = {
  movie: MovieType,
  onRemove: (id: number) => void,
  onToggle: (id: number) => void
}

function Movie({ movie, onRemove, onToggle }: MovieProps2) {
  return (
    <>
      <div>
       <b 
          style={{cursor: 'pointer', color: movie.active? 'blue': 'black'}} 
          onClick={()=>onToggle(movie.id)}>
            {movie.title}
        </b>
        - {movie.director} - {movie.year}
        <button onClick={()=>onRemove(movie.id)}>삭제</button>
      </div>
    </>
  )
}

type CreateMovieProps = {
  title: string,
  director: string,
  year: string,
  onCreate: () => void
  onChange: React.ChangeEventHandler<HTMLInputElement>
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function CreateMovie({ title, director, year, onCreate, onChange }: CreateMovieProps) {
  return (
    <>
      <input name="title" placeholder="title" value={title} onChange={onChange} />
      <input name="director" placeholder="director" value={director} onChange={onChange} />
      <input name="year" placeholder="year" value={year} onChange={onChange} />
      <button onClick={onCreate}>등록</button>
    </>
  )
}

export { MovieList, CreateMovie }