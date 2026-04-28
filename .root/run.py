import http.server
import socketserver

PORT = 1664
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server started on: http://localhost:{PORT}")
    httpd.serve_forever()