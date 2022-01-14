/*-----------Table Head Data------------- */
export const coinListTableHead = [
    "sıra #",
    "coin",
    "fiyat",
    "24 saatlik Değişim",
    "24 saatlik Hacim",
    ""
]


/*---Utiliy Functions---- */

export const transformCurrenyFormat = (number) =>{
    return new Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', maximumSignificantDigits: 3 }).format(number)
}


export const transformPercentageFormat = (data,fixed) =>{
    const percentage = `${data.toFixed(fixed)} %`
    return percentage;
}

export const percentageColor = (percentage) =>{
    return percentage > 0 ? "text-color-green":"text-color-red"
}

/*-------- Detail Chart Object---------- */
export const detailChartOptions = {      
    options: {
        chart: {
            background: 'transparent',
            toolbar: {
                show: false,
            },
            fontFamily:'"Roboto", sans-serif',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            },
            background: '#e9ecef'             
        },
        yaxis:{
            labels: {
                formatter: (val) =>"$ " + new Intl.NumberFormat().format(val),
                style:{
                    
                }
            }  
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false
        },
        tooltip: {
            y: {
              formatter:(val) =>"$ " + new Intl.NumberFormat().format(val) 
            }         
        },
        colors: ['#053c5e'],
        noData: {
            text: 'Yükleniyor...'
        }         
    }
   
}

export const favoriteListChartOptions = {      
    options: {
        chart: {
            background: 'transparent',
            toolbar: {
                show: false,
            }              
        },
        xaxis:{
           labels:{
               show:false
           }  
        },
        yaxis:{
            labels:{
                show:false
            }  
         },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false
        },
        tooltip: {
            enabled:false,
        }
    }
   
}

/*-----Charts Buttons------- */
export const chartDays = [
    {
      id:1,  
      label: "24 saat",
      value: 1,
    },
    {
      id:2,   
      label: "7 gün",
      value: 7,
    },
    {
      id:3,   
      label: "1 ay",
      value: 30,
    },
    {
      id:4, 
      label: "1 yıl",
      value: 365,
    },
  ];