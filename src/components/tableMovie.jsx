import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';                   
class TableMovies extends Component {
    state = { 
        movieName: getMovies()
     };
    render() { 
        return ( <div><table className="table">
            <thead>
                <tr>
                    <th> Title</th>
                    <th> Genra</th>
                    <th> Stock</th>
                    <th> Rate</th>
                </tr>
            </thead>
            <tbody>
                {this.state.movieName.map(movie => (
                <tr>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
        <h1>THis is  a pop table</h1>
        </div>
        );
    }
}
 
export default TableMovies;