import {Page} from '../pagination/page.model'
export class PagerService {
    getPager(totalItems: number, currentPageNumber: number = 1, pageSize: number = 5, navigationPages:number= 5) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
 
        let startPage: number, endPage: number;
        if (totalItems <= (pageSize*navigationPages)) {
            // less than 5 pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 5 total pages so calculate start and end pages
            let halfpage= Math.ceil(pageSize/2) ; //3 for a page of 5
            if (currentPageNumber <= halfpage) {
                startPage = 1;
                if(totalPages>=navigationPages){
                    endPage = navigationPages;
                }
                else{
                    endPage = totalPages;
                }                
               
            }
            else if( (currentPageNumber -halfpage) > 0){
                startPage = currentPageNumber;
                let remainingpages = totalPages-currentPageNumber
                if(remainingpages>navigationPages){
                    endPage =currentPageNumber + (remainingpages - navigationPages);
                }
                else{
                    endPage = currentPageNumber + remainingpages;
                }    
            }           
        }
 
        // calculate start and end item indexes
        let startPageIndex = (currentPageNumber - 1) * pageSize;
        let endPageIndex = Math.min(startPageIndex + pageSize - 1, totalItems - 1);
        let pageNumbers: number[] =[pageSize];
        let arrIndex=0; 
       for( var i= startPage; i<=endPage;i++){
            pageNumbers[arrIndex++]=i;
        }

        // return object with all pager properties required by the view
        var page = new Page();
        page.totalItems= totalItems;
        page.currentPageNumber= currentPageNumber;
        page.pageSize= pageSize;
        page.totalPages= totalPages;
        page.startPage= startPage;
        page.endPage= endPage;
        page.startIndex= startPageIndex;
        page.endIndex= endPageIndex;
        page.pageNumbers=pageNumbers;
        return page;
    }
}