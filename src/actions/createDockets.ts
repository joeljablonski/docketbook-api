

export const createDockets = (dockets: any[]) => {

    let newDockets: any[] = [];

    if (dockets && dockets.length >= 1) {
      dockets.map((docket: any) => {
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
        
          newDockets.push({
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
      })
    }
  
    return newDockets
    
  
  }
  