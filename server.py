
import http.server 
import socketserver

PORT = 8000
HOST = "localhost"
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer((HOST, PORT), Handler) as httpd:
    print(f"Serving at {HOST}:{PORT}")
    httpd.serve_forever()