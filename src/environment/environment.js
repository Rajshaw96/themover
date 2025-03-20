const ENV = {
          development: {
            API_URL: "https://portal.themover.in/parc_api/reg_user.php",
          },
          // production: {
          //   API_URL: "https://portal.themover.in/parc_api/reg_user.php",
          // },
        };
        
        const currentEnv = process.env.NODE_ENV || "development";
        
        export const config = ENV[currentEnv];
        