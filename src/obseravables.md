

Observables 

Productor                        Consumidor
Subject
   next(34) -->
   error({e3})
   complete()  -->                  http.get(url);

   asObservable() ----->            sub = http.get(url).pipe(
                                      map(r => transforma(r)),
                                      filter(),
                                      op2(),
                                      op3(),
                                    ).subcribe({
                                        next: (d) => { proceso(d)  }
                                        error: (e) => { gestionDeErrores(e) } 
                                        complete: () => { seAcabo() }
                                    });


                                    sub.unsubcribe();

                                    
AsyncSub
