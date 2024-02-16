function errorrHandling(err, req, res, next){
    if (err || res .statusCode >= 400){
        res.json({
            status: err.status || res.
            statusCode || 500,
            msg: 'Ah error occured. Please try again later'
        })
    }else
{
    next()
}
}
export{
    errorrHandling
}