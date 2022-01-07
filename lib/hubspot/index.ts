declare const hbspt : any 

export function hubSpotFormCreate(formDetail){
    if(typeof hbspt !== "undefined") {
        hbspt.forms.create(formDetail)
    }
}