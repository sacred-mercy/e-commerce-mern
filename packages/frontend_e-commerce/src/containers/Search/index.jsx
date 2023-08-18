function Search() {
	//get search string from url
	let search = window.location.search;
	let params = new URLSearchParams(search);
	let search_string = params.get("search");
    
	return (
		<div>
			<h1>Search</h1>
			<p>Search string: {search_string}</p>
		</div>
	);
}

export default Search;
