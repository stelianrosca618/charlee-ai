import React, { useEffect, useState } from "react";
import { HomeHeader } from "../../components/headers/HomeHeader";
import { Footer } from "../../components/footers/Footer";
import { Container, Select, MenuItem, InputLabel, FormControl, Checkbox, ListItemText, Chip, Drawer, CircularProgress } from "@mui/material"; // Added CircularProgress
import { CiSearch } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { getArticles } from '../../providers/apis/researchApi';
import moment from "moment";

const contentTypeOptions = ["Use Cases", "Case Study", "White Papers", "Blogs"];
const businesslineOptions = ["Personal Auto", "Commercial Auto", "Homeowners", "Commercial Property", "General Liability", "Workers Compensation", "Business Owners", "Excess & Surplus", "Specialty"]
const roleOptions = ['Claims Manager', 'Claims Adjuster', 'Executive', 'Underwriter', 'SIU', 'Fraud', 'Finance', 'Actuary'];
const productOptions = ['4SeeCharlee', 'DocuCharlee', 'AskCharlee', 'FindCharlee'];
const areaOptions = ['Claims', 'Policy', 'FNOL', 'SIU', 'Fraud', 'Documents', 'Demand Packages', 'Medical Records', 'email'];

const ResearchPage = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("relevance");
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totals: 10,
    totalPages: 10,
  });
  const [filters, setFilters] = useState({
    ContentType: [],
    LOB: [],
    Role: [],
    Product: [],
    Area: [],
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // Added loading state

  useEffect(() => {
    const searchOptions = {
      page: pagination.page,
      limit: pagination.limit,
      order: sortOption,
      searchWord: searchQuery,
      filters: filters
    };
    loadArticles(searchOptions);
  }, [sortOption, searchQuery, filters]);

  const loadArticles = async (searchOptions) => {
    setLoading(true); // Start loading
    const researchData = await getArticles(searchOptions);
    console.log('researched result', researchData);
    if (!researchData.success) {
      setLoading(false); // Stop loading
      return;
    }

    const tmp_results = formatResultsData(researchData.data.accolades);
    setResults(tmp_results);
    setPagination({
      page: researchData.data.pagination.page,
      limit: researchData.data.pagination.limit,
      totals: researchData.data.pagination.total,
      totalPages: researchData.data.pagination.pages,
    });
    setLoading(false); // Stop loading
  };

  const genTypeColor = (contentType) => {
    let colorVal = '#04a050';
    switch(contentType){
      case "Use Cases":
        colorVal = '#04a050';
        break;
      case "Case Studies":
        colorVal = '#a00404';
        break;
      case "Whitepapers":
        colorVal = '#0408a0';
        break;
      case "Blogs":
        colorVal = '#ffa502';
        break;
    };
    return colorVal;
  }
  const formatResultsData = (data_arr) => {
    return data_arr.map((itemObj) => {
      const formattedDate = moment(itemObj.ArticleDate).format("MMM Do YYYY"); // Format the date
      return {
        ...itemObj,
        id: itemObj.id,
        title: itemObj.title,
        Description: itemObj.Description,
        ContentType: itemObj.ContentType,
        TypeColor: genTypeColor(itemObj.ContentType),
        Product: itemObj.Product,
        Area: itemObj.Area.split(", ").map(item => item.trim()),
        Role: itemObj.Role.split(", ").map(item => item.trim()),
        LOB: itemObj.LOB.split(", ").map(item => item.trim()),
        body: itemObj.Body,
        ArticleDate: formattedDate, // Use the formatted date
      };
    });
  }

  const loadNextPage = (pageNum) => {
    const searchOptions = {
      page: pageNum,
      limit: pagination.limit,
      order: sortOption,
      searchWord: searchQuery,
      filters: filters
    };
    loadArticles(searchOptions);
  }

  const toggleSearch = () => {
    setSearchQuery('');
  };

 
  const handleResetAll = () => {
    setFilters({
      ContentType: [],
      LOB: [],
      Role: [],
      Product: [],
      Area: [],
    });
    // setSearchQuery("");
  };

  const onArticleClick = (resultItem) => {
    console.log(resultItem);
    setSelectedArticle(resultItem.body)
    toggleDrawer(true);
  }

  const toggleDrawer = (opendrawer) => {
    setIsOpenDrawer(opendrawer);
  }

  return (
    <div className="w-full overflow-x-hidden">
      <HomeHeader headerColor={"#021744"} textColor={"#ffffff"} />
      <div className="py-4">
        <Container className="relative pt-24 pb-6" maxWidth="lg">
          <div className="w-full flex justify-start items-center py-6 mb-4">
            <div className="flex border border-gray-500 rounded w-full p-1">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 w-full border-none outline-none"
              />
              <button
                onClick={toggleSearch}
                className="text-black px-4 py-2 flex items-center justify-center border-l"
              >
                {searchQuery == '' && <CiSearch />}
                {searchQuery != '' && <GrClose />}
              </button>
            </div>
          </div>
          <div className="w-full flex justify-start items-start gap-6">
            <div className="w-[450px] flex flex-col gap-2 py-2">
              <div className="w-full text-start">
                <label className="w-full text-start mb-2" >Content Type</label>
                <FormControl className="w-full" size="small">
                  <Select
                    multiple
                    value={filters.ContentType}
                    onChange={(e) => setFilters((prev) => ({ ...prev, ContentType: e.target.value }))}
                    inputProps={{ 'aria-label': 'Without label' }}
                    renderValue={(selected) => (
                      
                      <div className="flex flex-wrap gap-1">
                        {selected.map((value) => (
                          <Chip
                            size="small"
                            key={value}
                            label={value}
                          />
                        ))}
                      </div>
                    )}
                  >
                    {contentTypeOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        <Checkbox checked={filters.ContentType.indexOf(option) > -1} />
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="w-full text-start">
                <label className="w-full text-start mb-2" >Line(s) of Business</label>
                <FormControl className="w-full" size="small">
                  <Select
                    multiple
                    value={filters.LOB}
                    onChange={(e) => setFilters((prev) => ({ ...prev, LOB: e.target.value }))}
                    inputProps={{ 'aria-label': 'Without label' }}
                    renderValue={(selected) => (
                      
                      <div className="flex flex-wrap gap-1">
                        {selected.map((value) => (
                          <Chip
                            size="small"
                            key={value}
                            label={value}
                          />
                        ))}
                      </div>
                    )}
                  >
                    {businesslineOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        <Checkbox checked={filters.LOB.indexOf(option) > -1} />
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="w-full text-start">
                <label className="w-full text-start mb-2" >Role</label>
                <FormControl className="w-full" size="small">
                  <Select
                    multiple
                    value={filters.Role}
                    onChange={(e) => setFilters((prev) => ({ ...prev, Role: e.target.value }))}
                    inputProps={{ 'aria-label': 'Without label' }}
                    renderValue={(selected) => (
                      
                      <div className="flex flex-wrap gap-1">
                        {selected.map((value) => (
                          <Chip
                            size="small"
                            key={value}
                            label={value}
                          />
                        ))}
                      </div>
                    )}
                  >
                    {roleOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        <Checkbox checked={filters.Role.indexOf(option) > -1} />
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="w-full text-start">
                <label className="w-full text-start mb-2" >Product</label>
                <FormControl className="w-full" size="small">
                  <Select
                    multiple
                    value={filters.Product}
                    onChange={(e) => setFilters((prev) => ({ ...prev, Product: e.target.value }))}
                    inputProps={{ 'aria-label': 'Without label' }}
                    renderValue={(selected) => (
                      
                      <div className="flex flex-wrap gap-1">
                        {selected.map((value) => (
                          <Chip
                            size="small"
                            key={value}
                            label={value}
                          />
                        ))}
                      </div>
                    )}
                  >
                    {productOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        <Checkbox checked={filters.Product.indexOf(option) > -1} />
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="w-full text-start">
                <label className="w-full text-start mb-2" >Area</label>
                <FormControl className="w-full" size="small">
                  <Select
                    multiple
                    value={filters.Area}
                    onChange={(e) => setFilters((prev) => ({ ...prev, Area: e.target.value }))}
                    inputProps={{ 'aria-label': 'Without label' }}
                    renderValue={(selected) => (
                      <div className="flex flex-wrap gap-1">
                        {selected.map((value) => (
                          <Chip
                            size="small"
                            key={value}
                            label={value}
                          />
                        ))}
                      </div>
                    )}
                  >
                    {areaOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        <Checkbox checked={filters.Area.indexOf(option) > -1} />
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="w-full flex justify-center items-center py-4">
                <button className="px-4 py-2 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white" onClick={handleResetAll}>
                  Reset All
                </button>
              </div>
            </div>
            <div className="w-full pl-3 border-l border-l-slate-700">
              {loading ? ( // Show loading indicator
                <div className="w-full flex justify-center items-center py-4 min-h-[22rem]">
                  <CircularProgress />
                </div>
              ) : (
                <>
                  <div className="w-full flex justify-between items-center">
                    <div className="w-fit">
                      {results.length > 0 && 
                        <h3 className="text-2xl font-bold">Showing {((pagination.page - 1) * pagination.limit + 1)}-{(pagination.page * pagination.limit)} of more than {pagination.totals} results</h3>
                      }
                      {results.length == 0 && 
                        <h3 className="text-2xl font-bold">There is no result</h3>
                      }
                    </div>
                    <div className="w-fit flex justify-end items-center gap-2">
                      <span className="uppercase">Sort By</span>
                      <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="border p-2"
                      >
                        <option value="name-asc">Name (Ascending)</option>
                        <option value="name-desc">Name (Descending)</option>
                        <option value="title-asc">Title (Ascending)</option>
                        <option value="title-desc">Title (Descending)</option>
                        <option value="relevance">Relevance</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full flex-col gap-2 min-h-[20rem]">
                    {results.map((resultItem, key) => (
                      <div key={key} onClick={() => onArticleClick(resultItem)} className="w-full py-2">
                        <h3 className="px-2 text-2xl font-bold text-start">{resultItem.title}</h3>
                        <div className="w-full flex justify-start items-center py-1">
                          <div className="px-2 uppercase font-bold"
                          style={{ color: resultItem.TypeColor }}
                          >{resultItem.ContentType}</div>
                          <div className="px-2 border-l border-l-slate-700">{resultItem.ArticleDate}</div>
                          <div className="px-2 border-l border-l-slate-700 flex justify-start items-center gap-2">
                            {resultItem.Area.map((areaItem, key) => (
                              <span key={key}>{areaItem}</span>
                            ))}
                          </div>
                          <div className="px-2 border-l border-l-slate-700 ">
                            {resultItem.Product}
                          </div>
                        </div>
                        <div className="px-2 w-full line-clamp-3 text-start text-[14px]">
                          {resultItem.Description}
                        </div>
                        <div className="px-2 w-full text-start">
                          <span className="font-bold text-start">{resultItem.Author}</span>
                        </div>
                      </div>  
                    ))}
                    {results.length == 0 && 
                      <div className="w-full h-full justify-center items-center">
                        <svg className="w-fit h-[20rem] mx-auto" viewBox="0 0 351 539" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.11184 264.311L0.000522494 264.492C0.000522494 264.492 0.20923 264.547 0.20923 264.54C0.20923 264.533 0.306641 264.359 0.306641 264.359L0.11184 264.311Z" fill="#89BCE4"/>
                          <ellipse cx="50.1659" cy="21.7254" rx="50.1659" ry="21.7254" transform="matrix(-0.707107 0.707107 0.707107 0.707107 113.609 311.882)" fill="#E6E6E6"/>
                          <ellipse cx="50.1659" cy="21.7254" rx="50.1659" ry="21.7254" transform="matrix(-0.866025 0.5 0.5 0.866025 306.439 322.758)" fill="#E6E6E6"/>
                          <path d="M39.1114 264.311L39 264.492C39 264.492 39.2087 264.547 39.2087 264.54C39.2087 264.533 39.3062 264.359 39.3062 264.359L39.1114 264.311Z" fill="#89BCE4"/>
                          <path d="M87.9064 108.785L88.2129 108.715C88.2129 108.715 88.3035 108.409 88.2965 108.409C87.9482 108.304 87.8646 108.478 87.9064 108.778V108.785Z" fill="#89BCE4"/>
                          <path d="M208.183 302.14C190.673 302.182 173.162 302.074 155.652 302.221C152.259 302.25 148.862 303.127 145.481 303.689C143.656 303.994 141.843 304.409 140.052 304.877C139.054 305.137 138.085 305.557 137.147 305.995C134.736 307.122 132.264 308.155 129.968 309.484C120.183 315.158 114.271 324.683 114.271 324.683C113.997 325.127 112.839 327.015 111.707 329.484C109.747 333.753 106.254 343.251 107.664 358.105C107.969 359.999 108.504 363.065 109.371 366.818C110.645 372.329 110.995 372.774 112.752 379.527C113.558 382.629 114.249 385.76 115.063 388.862C115.523 390.612 116.185 392.309 116.65 394.056C117.105 395.76 117.37 397.515 117.824 399.22C118.292 400.961 118.891 402.669 119.432 404.393C119.839 405.693 120.202 407.011 120.664 408.293C121.145 409.622 121.71 410.922 122.256 412.228C122.881 413.72 123.43 415.254 124.182 416.681C126.136 420.389 127.932 424.214 130.254 427.684C133.125 431.976 136.298 436.092 139.637 440.035C143.837 444.992 148.828 449.15 154.11 452.927C156.115 454.361 158.211 455.675 160.347 456.907C162.22 457.987 164.151 459.003 166.152 459.81C168.254 460.655 170.452 461.27 172.635 461.893C174.862 462.531 177.113 463.08 179.367 463.621C180.079 463.792 180.827 463.876 181.558 463.884C184.62 463.91 187.689 463.97 190.749 463.854C192.023 463.807 193.279 463.353 194.545 463.082C194.8 463.027 195.055 462.92 195.31 462.925C198.173 462.985 200.71 461.677 203.308 460.808C205.879 459.949 208.217 458.404 210.699 457.256C215.262 455.149 219.194 452.116 223.105 449.029C228.054 445.126 232.323 440.544 236.229 435.643C238.462 432.843 240.45 429.827 242.362 426.793C244.267 423.77 246.072 420.668 247.672 417.474C248.941 414.939 249.844 412.222 250.884 409.577C251.782 407.295 252.728 405.027 253.49 402.7C254.037 401.03 254.302 399.267 254.709 397.552C254.987 396.378 255.273 395.203 255.591 394.037C256.1 392.17 256.647 390.31 257.167 388.445C257.167 388.445 257.685 386.598 258.292 384.318C258.297 384.3 259.505 379.753 260.548 374.817C267.414 342.277 259.565 327.863 259.565 327.863L259.576 327.866C256.484 322.187 250.933 316.051 247.469 313.232C246.148 312.158 244.779 311.204 244.779 311.204C242.36 309.52 239.809 308.105 237.13 306.923C233.91 305.504 230.54 304.443 227.049 303.66C220.802 302.26 214.518 302.127 208.183 302.14Z" fill="#E6E6E6"/>
                          <path d="M208.183 302.14C190.673 302.182 173.162 302.074 155.652 302.221C152.259 302.25 148.862 303.127 145.481 303.689C143.656 303.994 141.843 304.409 140.052 304.877C139.054 305.137 138.085 305.557 137.147 305.995C134.736 307.122 132.264 308.155 129.968 309.484C120.183 315.158 114.271 324.683 114.271 324.683C113.997 325.127 112.839 327.015 111.707 329.484C109.747 333.753 106.254 343.251 107.664 358.105C107.969 359.999 108.504 363.065 109.371 366.818C110.645 372.329 110.995 372.774 112.752 379.527C113.558 382.629 114.249 385.76 115.063 388.862C115.523 390.612 116.185 392.309 116.65 394.056C117.105 395.76 117.37 397.515 117.824 399.22C118.292 400.961 118.891 402.669 119.432 404.393C119.839 405.693 120.202 407.011 120.664 408.293C121.145 409.622 121.71 410.922 122.256 412.228C122.881 413.72 123.43 415.254 124.182 416.681C126.136 420.389 127.932 424.214 130.254 427.684C133.125 431.976 136.298 436.092 139.637 440.035C143.837 444.992 148.828 449.15 154.11 452.927C156.115 454.361 158.211 455.675 160.347 456.907C162.22 457.987 164.151 459.003 166.152 459.81C168.254 460.655 170.452 461.27 172.635 461.893C174.862 462.531 177.113 463.08 179.367 463.621C180.079 463.792 180.827 463.876 181.558 463.884C184.62 463.91 187.689 463.97 190.749 463.854C192.023 463.807 193.279 463.353 194.545 463.082C194.8 463.027 195.055 462.92 195.31 462.925C198.173 462.985 200.71 461.677 203.308 460.808C205.879 459.949 208.217 458.404 210.699 457.256C215.262 455.149 219.194 452.116 223.105 449.029C228.054 445.126 232.323 440.544 236.229 435.643C238.462 432.843 240.45 429.827 242.362 426.793C244.267 423.77 246.072 420.668 247.672 417.474C248.941 414.939 249.844 412.222 250.884 409.577C251.782 407.295 252.728 405.027 253.49 402.7C254.037 401.03 254.302 399.267 254.709 397.552C254.987 396.378 255.273 395.203 255.591 394.037C256.1 392.17 256.647 390.31 257.167 388.445C257.167 388.445 257.685 386.598 258.292 384.318C258.297 384.3 259.505 379.753 260.548 374.817C267.414 342.277 259.565 327.863 259.565 327.863L259.576 327.866C256.484 322.187 250.933 316.051 247.469 313.232C246.148 312.158 244.779 311.204 244.779 311.204C242.36 309.52 239.809 308.105 237.13 306.923C233.91 305.504 230.54 304.443 227.049 303.66C220.802 302.26 214.518 302.127 208.183 302.14Z" stroke="#00E1E1"/>
                          <mask id="path-7-outside-1_4580_346" maskUnits="userSpaceOnUse" x="45.5522" y="118.049" width="279" height="174" fill="black">
                          <rect fill="white" x="45.5522" y="118.049" width="279" height="174"/>
                          <path d="M311.552 205.103C311.552 164.204 278.397 131.049 237.498 131.049H132.388C91.489 131.049 58.3337 164.204 58.3337 205.103C58.3337 246.002 91.489 279.158 132.388 279.158H237.498C278.397 279.158 311.552 246.002 311.552 205.103Z"/>
                          </mask>
                          <path d="M311.552 205.103C311.552 164.204 278.397 131.049 237.498 131.049H132.388C91.489 131.049 58.3337 164.204 58.3337 205.103C58.3337 246.002 91.489 279.158 132.388 279.158H237.498C278.397 279.158 311.552 246.002 311.552 205.103Z" fill="#E6E6E6"/>
                          <path d="M237.498 143.329H132.388V118.769H237.498V143.329ZM132.388 266.878H237.498V291.437H132.388V266.878ZM237.498 266.878C271.615 266.878 299.273 239.221 299.273 205.103H323.832C323.832 252.784 285.179 291.437 237.498 291.437V266.878ZM70.6134 205.103C70.6134 239.221 98.2709 266.878 132.388 266.878V291.437C84.7072 291.437 46.0541 252.784 46.0541 205.103H70.6134ZM132.388 143.329C98.2708 143.329 70.6134 170.986 70.6134 205.103H46.0541C46.0541 157.422 84.7071 118.769 132.388 118.769V143.329ZM237.498 118.769C285.179 118.769 323.832 157.422 323.832 205.103H299.273C299.273 170.986 271.615 143.329 237.498 143.329V118.769Z" fill="#E6E6E6" mask="url(#path-7-outside-1_4580_346)"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M222.28 254.363C220.726 252.658 218.083 252.536 216.377 254.091C208.045 261.688 197.613 266.139 186.346 266.139C175.079 266.139 164.647 261.688 156.314 254.091C154.609 252.536 151.966 252.658 150.411 254.363C148.856 256.069 148.979 258.712 150.684 260.266C160.397 269.121 172.79 274.496 186.346 274.496C199.902 274.496 212.295 269.121 222.008 260.266C223.713 258.712 223.835 256.069 222.28 254.363Z" fill="#021744"/>
                          <rect width="208.466" height="86.7442" rx="43.3721" transform="matrix(-1 0 0 1 289.819 152.321)" fill="#021744"/>
                          <path d="M231.827 217.235C219.889 217.235 210.211 207.557 210.211 195.619C210.211 183.681 219.889 174.003 231.827 174.003C243.765 174.003 253.443 183.681 253.443 195.619C253.443 207.557 243.765 217.235 231.827 217.235Z" fill="#4CFFE9"/>
                          <path d="M138.782 217.235C126.844 217.235 117.166 207.557 117.166 195.619C117.166 183.681 126.844 174.003 138.782 174.003C150.721 174.003 160.398 183.681 160.398 195.619C160.398 207.557 150.721 217.235 138.782 217.235Z" fill="#4CFFE9"/>
                          <rect width="75.2489" height="15.5276" rx="7.76378" transform="matrix(-1 0 0 1 225.249 109.554)" fill="#E6E6E6"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M183.492 77.3027V118.233H191.849V77.3027H183.492Z" fill="#E6E6E6"/>
                          <g filter="url(#filter0_d_4580_346)">
                          <path d="M187.916 92.8328C178.021 92.8328 170 84.8114 170 74.9164C170 65.0214 178.021 57 187.916 57C197.811 57 205.833 65.0214 205.833 74.9164C205.833 84.8114 197.811 92.8328 187.916 92.8328Z" fill="#4CFFE9"/>
                          </g>
                          <g filter="url(#filter1_f_4580_346)">
                          <ellipse cx="110.448" cy="17.1503" rx="110.448" ry="17.1503" transform="matrix(-1 0 0 1 296.774 486.996)" fill="black" fill-opacity="0.4"/>
                          </g>
                          <path d="M308.702 325.141C308.707 325.112 308.734 325.085 308.763 325.081L313.121 324.524C313.15 324.52 313.171 324.541 313.168 324.57L305.474 389.867C305.471 389.897 305.443 389.925 305.413 389.929L298.355 390.832C298.325 390.836 298.304 390.814 298.309 390.784L308.702 325.141Z" fill="#6B7987"/>
                          <path d="M308.83 324.214C308.834 324.185 308.861 324.158 308.891 324.155L310.659 323.928C310.689 323.924 310.71 323.945 310.706 323.975L301.891 390.327C301.887 390.357 301.859 390.384 301.829 390.388L298.355 390.832C298.325 390.836 298.304 390.815 298.308 390.784L308.83 324.214Z" fill="#E6E6E6"/>
                          <circle cx="314.498" cy="298.497" r="26.1908" transform="rotate(15 314.498 298.497)" fill="#0048ff" fill-opacity="0.3"/>
                          <ellipse cx="311.223" cy="292.541" rx="21.4859" ry="21.2848" transform="rotate(15 311.223 292.541)" fill="#E6E6E6" fill-opacity="0.05"/>
                          <ellipse cx="8.97175" cy="13.3687" rx="8.97175" ry="13.3687" transform="matrix(-0.966712 -0.255867 -0.255867 0.966712 321.392 339.591)" fill="#E6E6E6"/>
                          <circle cx="314.498" cy="298.497" r="27.8001" transform="rotate(15 314.498 298.497)" stroke="#E6E6E6" stroke-width="4"/>
                          <defs>
                          <filter id="filter0_d_4580_346" x="113.816" y="0.81665" width="148.2" height="148.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset/>
                          <feGaussianBlur stdDeviation="28.0917"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.298039 0 0 0 0 1 0 0 0 0 0.913725 0 0 0 1 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4580_346"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4580_346" result="shape"/>
                          </filter>
                          <filter id="filter1_f_4580_346" x="58.4779" y="469.596" width="255.696" height="69.1006" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="8.7" result="effect1_foregroundBlur_4580_346"/>
                          </filter>
                          </defs>
                        </svg>
                      </div>
                    }
                  </div>
                  {results.length > 0 && 
                  <div className="w-full flex justify-center items-center py-4">
                    <button
                      className="px-4 py-2 mx-2 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white"
                      disabled={pagination.page === 1}
                      onClick={() => loadNextPage(pagination.page - 1)}
                    >
                      Prev
                    </button>
                    <span className="px-4">
                      Page {pagination.page} of {pagination.totalPages}
                    </span>
                    <button
                      className="px-4 py-2 mx-2 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white"
                      disabled={pagination.page === pagination.totalPages}
                      onClick={() => loadNextPage(pagination.page + 1)}
                    >
                      Next
                    </button>
                  </div>
                  }
                </>
              )}
            </div>
          </div>
          <Drawer
            anchor={'right'}
            open={isOpenDrawer}
            onClose={() => toggleDrawer(false)} // Pass as a callback
            sx={{ zIndex: 10,  '& .MuiDrawer-paper': { width: '600px', paddingTop: '90px', paddingBottom: '16px' } }} // Set drawer width to 600px
          >
            <div className="research-content px-4" dangerouslySetInnerHTML={{ __html: selectedArticle }}></div>
          </Drawer>
        </Container>
        
      </div>
      <Footer />
    </div>
  );
};

export default ResearchPage;