import React from "react";

const TableCoins = ({coins})=>{

    
    return (
        <div>
          <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>

                    </tr>

                </thead>

                <tbody>
                    {coins.map(coin =>(
                        <tr>{coin.name}</tr>
                    ))}


                </tbody>



          </table>

        </div>
    )
}

export default TableCoins