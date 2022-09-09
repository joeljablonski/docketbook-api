



export const createDocketById = (docket: any) => {

    let newDocket: any[] = [];
  
    if (docket) {
        let { 
            createdAt, 
            date,
            docketNumber,
            id,
            organisation,
            organisationGroup,
            resources,
            status,
            updatedAt
        } = docket;
        
        newDocket.push({
            createdAt, 
            date,
            docketNumber,
            id,
            organisation,
            organisationGroup,
            resources,
            status,
            updatedAt
        })
    }
  
    return newDocket
  }
  