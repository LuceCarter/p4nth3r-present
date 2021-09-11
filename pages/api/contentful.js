

export default async function GetDataFromContentful () {
    
    const baseURL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`
    const apiKey = process.env.CONTENTFUL_ACCESS_TOKEN;

    const query = `{
        writtenTestimonialCollection {
          items {
            name
            writtenSubmission {
              json
            }
          }
        }
      }`

      try {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                Authorization: "Bearer " + apiKey,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({query})
        });
        
        return response.json();
      }
      catch (error) {
          console.log(error.message);
      }

}