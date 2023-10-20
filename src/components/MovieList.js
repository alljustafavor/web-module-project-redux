import React from 'react';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { connect } from 'react-redux';

const MovieList = (props) => {
    const movies = props.movies;

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>{props.title}</th>
                        <th>{props.director}</th>
                        <th>{props.denre}</th>
                        <th>{props.metascore}</th>
                        <th>{props.description}</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)
                    }
                </tbody>
            </table>

            <MovieFooter totalMovies={movies.length} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movies, // Assuming movies is the array of movies in your Redux state
    }
}


export default connect(mapStateToProps,)(MovieList);