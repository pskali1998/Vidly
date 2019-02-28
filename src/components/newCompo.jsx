import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
class NewCompo extends Component {
  state = {
    objmov: [], // need to define the both backend entities as empty as it take time for backend to render the value and we don't want these property to be undifined for that part
    genres: [], // to make more robust our application
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };
  // intialize here all property renderd from backend instance will only be rendered if and only if it recive data from backend
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ objmov: getMovies(), genres });
  }
  handleDelete = currmovie => {
    const newMov = this.state.objmov.filter(m => m._id !== currmovie._id);
    //  console.log(newMov);
    this.setState({ objmov: newMov });
    //console.log(this.state.objmov)
  };
  handleLike = movie => {
    //console.log("Like event raised",movie);
    const movies = [...this.state.objmov];
    //console.log(movies);
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ objmov: movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  getPageData = () => {
    const {
      objmov,
      selectedGenre,
      pageSize,
      currentPage,
      sortColumn
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? objmov.filter(m => m.genre._id === selectedGenre._id)
        : objmov;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };
  render() {
    // Adding the message list :
    // Obj Destructuring into moviesNo
    const { length: moviesNo } = this.state.objmov;
    const { pageSize, currentPage, sortColumn } = this.state;
    if (moviesNo === 0) return <p>No Movies Left</p>;
    const { totalCount, data } = this.getPageData();
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <p>Movies No are {totalCount} .</p>
            <MoviesTable
              movies={data}
              sortColumn={sortColumn} // we added sort coloum as a props as bcoz when ever user get awsay from the moviesTable component and comes back they must maintain the sort order of previous sort order done befoure :
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewCompo;
