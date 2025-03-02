# SSH (Secure Shell)

## What is SSH?

SSH (**Secure Shell**) is a protocol used to securely connect to remote systems over a network. It encrypts communication to prevent unauthorized access and attacks.

### **Uses of SSH**

- Securely log into remote servers
- Execute commands on remote machines
- Transfer files securely (`scp`, `sftp`)
- Set up port forwarding and tunneling

---

## How SSH Works

SSH operates on a **client-server model**:

- **Client**: Your local machine (e.g., laptop)
- **Server**: The remote machine (e.g., cloud server)

### **Authentication Methods**

1. **Password Authentication** (Less secure)
2. **SSH Key Authentication** (More secure and recommended)

### **Establishing an SSH Connection**

To connect to a server:

```sh
ssh username@server-ip
```

If using a non-default SSH port (e.g., 2222):

```sh
ssh -p 2222 username@server-ip
```

---

## SSH Key Authentication (Recommended)

Instead of using passwords, SSH keys provide a more secure way to authenticate.

### **Generating an SSH Key Pair**

Run the following command on your local machine:

```sh
ssh-keygen -t rsa -b 4096
```

- This creates two files:
  - **Private Key**: `~/.ssh/id_rsa` (Keep this secure, never share!)
  - **Public Key**: `~/.ssh/id_rsa.pub`

### **Copying the Public Key to the Server**

```sh
ssh-copy-id username@server-ip
```

Alternatively, manually copy the key:

```sh
cat ~/.ssh/id_rsa.pub | ssh username@server-ip "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

### **Now, log in without a password**

```sh
ssh username@server-ip
```

---

## Common SSH Commands

| Command                               | Description                               |
| ------------------------------------- | ----------------------------------------- |
| `ssh user@server-ip`                  | Connect to a remote server                |
| `scp file user@server-ip:/path/`      | Securely copy a file to a server          |
| `scp -r folder user@server-ip:/path/` | Copy a folder recursively                 |
| `sftp user@server-ip`                 | Open an interactive file transfer session |
| `ssh-keygen -t rsa -b 4096`           | Generate an SSH key pair                  |
| `ssh-copy-id user@server-ip`          | Copy your SSH key to the server           |
| `exit`                                | Close the SSH session                     |

---

## SSH Configuration

To simplify SSH access, configure the `~/.ssh/config` file:

```sh
Host myserver
    HostName server-ip
    User username
    Port 22
    IdentityFile ~/.ssh/id_rsa
```

Now, you can SSH into the server using:

```sh
ssh myserver
```

---

## Troubleshooting SSH Issues

- **Permission denied (publickey):** Ensure your public key is in `~/.ssh/authorized_keys` on the server.
- **Connection refused:** The SSH service may not be running. Restart it using:
  ```sh
  sudo systemctl restart ssh
  ```
- **Too many authentication failures:** Use `ssh -o IdentitiesOnly=yes user@server-ip`.

---

## Where SSH Fits in Software Engineering

SSH falls under **DevOps & Cloud Engineering**, as it is essential for:

- Server management
- Secure remote access
- Deployments and automation
- Cloud computing (AWS, DigitalOcean, Azure)
- Security & access control

---

## Next Steps

1. Learn basic **Linux commands**: `ls`, `cd`, `cp`, `mv`, `rm`, `chmod`, `chown`
2. Understand **web servers** (Nginx, Apache)
3. Explore **server security** (firewalls, Fail2ban)
4. Practice **deploying web applications**
5. Get familiar with **cloud platforms** (AWS, DigitalOcean, GCP)
