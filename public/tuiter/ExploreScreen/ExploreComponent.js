import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="wd-input-icons">
            <i class="fa fa-search wd-icon fa-2x"></i>
            <input class="wd-input-field wd-rounded-corners-all-around" type="text"
                   placeholder="Search Tuiter"/>
            <a href="explore-settings.html" class="wd-icon-color-blue"><i class="fas fa-cog wd-icon float-right fa-2x"></i></a>
        </div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>
                <div class="list-group main-section">
                
            <a href="#" class="disabled list-group-item list-group-item-action">
                <img src="../../img/sapcex-starship.webp">
                <b class="carousel-caption">SpaceX's Starship</b>
            </a>           
            ${PostSummaryList()}
               </div>
    `);
}
export default ExploreComponent;

