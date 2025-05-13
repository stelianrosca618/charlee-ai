import React, { useEffect, useState } from "react";
import { HomeHeader } from "../../components/headers/HomeHeader";
import { Footer } from "../../components/footers/Footer";
import { Container, Select, MenuItem, InputLabel, FormControl, Checkbox, ListItemText, Chip, Drawer } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import {getArticles} from '../../providers/apis/researchApi';
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
  })
  const [filters, setFilters] = useState({
    ContentType: [],
    LOB: [],
    Role: [],
    Product: [],
    Area: [],
  });
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchOptions = {
      page: pagination.page,
      limit: pagination.limit,
      order: sortOption,
      searchWord: searchQuery,
      filters: filters
    };
    loadArticles(searchOptions);
  }, [sortOption, searchQuery, filters])
  const loadArticles = async (searchOptions) => {
    
    const researchData = await getArticles(searchOptions);
    console.log('researched result', researchData);
    if(!researchData.success){
      return;
    }

    const tmp_results = formatResultsData(researchData.data.accolades);
    setResults(tmp_results);
    setPagination({
      page: researchData.data.pagination.page,
      limit: researchData.data.pagination.limit,
      totals: researchData.data.pagination.total,
      totalPages: researchData.data.pagination.pages,
    })
  }

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
              <div className="w-full flex justify-between items-center">
                <div className="w-fit">
                  <h3 className="text-2xl font-bold">Showing {((pagination.page - 1) * pagination.limit + 1)}-{(pagination.page * pagination.limit)} of more than {pagination.totals} results</h3>
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
              <div className="w-full flex-col gap-2">
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
              </div>
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
              <div className="w-full ">
                {/* Pagination UI */}
              </div>
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