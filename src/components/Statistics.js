import React, { useContext, useEffect } from "react";
import { StatisticsConsumer, StatisticsContex } from "../context/StatisticsContext";
import { getStatisticsInfo } from "../helpers/statisticsInfo";


import { CResponse,
     CResponseF, 
     CResponseSuc, 
     CTimes, 
     Response, 
     ResponseF, 
     ResponseSuc, 
     ResponseSvg, 
     Select, 
     Span, 
     StatisticsC, 
     T, 
     Times, 
     TimesSvg, 
     } from "../styleComponents/styleStatistics";
import Footer from "./Footer";




const Statistics = () => {
    
    const { dispatch } = useContext(StatisticsContex);
    useEffect(()=>{
        try{
            getStatisticsInfo().then((data)=>{
                dispatch({
                    type: 'GET',
                    payload: { ...data},
                })
            })
        }
        catch(error) {}
    },  );
    return(
        <div>
            <main>
                <T>Estadísticas</T>
                 <Select name ="select-days">
                     <option value="last-seven-days">Los últimos 7 días</option>
                 </Select>
                <StatisticsConsumer>
                {(statistics) => (
                <>
                <StatisticsC>
                    <Times>
                        <Span>
                            <TimesSvg
                             width="24"
                             height="24"
                             viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">

                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.3788 11.214 12.725 11.5528 12.8944L15.5528 14.8944C16.0468 15.1414 16.6474 14.9412 16.8944 14.4472C17.1414 13.9532 16.9412 13.3526 16.4472 13.1056L13 11.382V6Z"
                      />
                                 
                             </TimesSvg>
                        </Span>
                        Tiempo de estudios (Horas)
                    </Times>
                    <CTimes id="count-times">{statistics.hours}</CTimes>
                    </StatisticsC>

                    <StatisticsC>
                        <Response>
                            <Span>
                                <ResponseSvg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                  <path
                        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />  
                                </ResponseSvg>
                            </Span>
                            Respuestas contestadas
                        </Response>
                        <CResponse id="count-response">
                        {statistics.totalResponse}
                        </CResponse>
                    </StatisticsC>

                    <StatisticsC>
                        <ResponseSuc>
                            <Span>
                                <ResponseSvg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">

                        <path
                        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                                    
                                </ResponseSvg>
                            </Span>
                            Respuestas Correctas
                        </ResponseSuc>
                        <CResponseSuc id="count-response-success">
                        {statistics.successResponses}
                        </CResponseSuc>
                    </StatisticsC>


                    <StatisticsC>
                        <ResponseF>
                            <Span>
                                <ResponseSvg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">

                        <path
                        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                                    
                                </ResponseSvg> 
                            </Span>
                            Respuestas Incorrectas
                        </ResponseF>
                        <CResponseF id="count-response-failed">
                        {statistics.failedResponses}
                        </CResponseF>
                    </StatisticsC>
                    </>)}

                </StatisticsConsumer>
            </main>
            <Footer/>
        </div>
    );
};

export default Statistics;
        

