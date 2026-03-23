var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact",
        policy =>
        {
            policy.WithOrigins("http://localhost:3001")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseCors("AllowReact");


app.MapGet("/api/message/{count}", (int count) =>
{
    return new
    {
        message = $"You clicked {count} times 👍"
    };
});

app.Run();