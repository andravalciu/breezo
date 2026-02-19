/**
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ThemeProvider } from "@/compenents/ThemeProvider";
import { TopAppBar } from "@/compenents/TopAppBar";

export const App = () => {
  return  <ThemeProvider>
    <TopAppBar/>
  </ThemeProvider>

};